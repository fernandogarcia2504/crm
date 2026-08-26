import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Employee from "../models/employee.model.js";

// LOGIN DEL PORTAL DE CURSOS (username/password generados en
// issueCourseCredentials, dentro de employee.controller.js)
export const courseLogin = async (req, res) => {

    try {

        const { username, password } = req.body;

        console.log("\n[DEBUG LOGIN] ===== Nuevo intento de login =====");
        console.log("[DEBUG LOGIN] body recibido:", req.body);

        if (!username || !password) {
            console.log("[DEBUG LOGIN] Falta username o password en el body");
            return res.status(400).json({
                message: "Usuario y contraseña son requeridos"
            });
        }

        const normalizedUsername = username.trim().toLowerCase();
        console.log(`[DEBUG LOGIN] username normalizado: "${normalizedUsername}"`);

        // TEMPORAL: revisa si hay MAS DE UN empleado con ese mismo
        // username, sin importar la empresa (esto no deberia pasar,
        // pero el check de duplicados actual solo es por empresa)
        const allMatches = await Employee.find({
            "courseAccount.username": normalizedUsername
        }).select("_id company courseAccount.username courseAccount.passwordHash courseAccount.credentialsIssuedAt");

        console.log(`[DEBUG LOGIN] documentos encontrados con ese username: ${allMatches.length}`);
        allMatches.forEach((doc, i) => {
            console.log(
                `[DEBUG LOGIN]   #${i} _id=${doc._id} company=${doc.company} ` +
                `hashPresente=${Boolean(doc.courseAccount?.passwordHash)} ` +
                `hashPrefix=${doc.courseAccount?.passwordHash?.slice(0, 15)}... ` +
                `credencialesEmitidas=${doc.courseAccount?.credentialsIssuedAt}`
            );
        });

        const employee = await Employee.findOne({
            "courseAccount.username": normalizedUsername
        }).populate("company", "name");

        if (!employee) {
            console.log("[DEBUG LOGIN] RESULTADO: no se encontro ningun empleado con ese username -> 401");
            return res.status(401).json({
                message: "Credenciales inválidas"
            });
        }

        console.log(`[DEBUG LOGIN] empleado encontrado: _id=${employee._id} company=${employee.company?._id || employee.company}`);
        console.log(`[DEBUG LOGIN] courseAccount.passwordHash presente: ${Boolean(employee.courseAccount?.passwordHash)}`);
        console.log(`[DEBUG LOGIN] courseAccount.passwordHash valor: ${employee.courseAccount?.passwordHash}`);

        if (!employee.courseAccount?.passwordHash) {
            console.log("[DEBUG LOGIN] RESULTADO: el empleado no tiene passwordHash -> 401");
            return res.status(401).json({
                message: "Credenciales inválidas"
            });
        }

        if (employee.status === "Inactivo") {
            console.log("[DEBUG LOGIN] RESULTADO: empleado inactivo -> 403");
            return res.status(403).json({
                message: "Esta cuenta se encuentra inactiva"
            });
        }

        console.log(`[DEBUG LOGIN] password recibido: "${password}" (longitud: ${password.length})`);

        const passwordCorrect = await bcrypt.compare(
            password,
            employee.courseAccount.passwordHash
        );

        console.log(`[DEBUG LOGIN] resultado de bcrypt.compare: ${passwordCorrect}`);

        if (!passwordCorrect) {
            console.log("[DEBUG LOGIN] RESULTADO: password no coincide con el hash -> 401");
            return res.status(401).json({
                message: "Credenciales inválidas"
            });
        }

        console.log("[DEBUG LOGIN] RESULTADO: login exitoso, generando token");

        const token = jwt.sign(
            {
                id: employee._id,
                type: "trainee"
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "8h"
            }
        );

        return res.status(200).json({
            message: "Login exitoso",
            token,
            employee: {
                id: employee._id,
                fullName: employee.fullName,
                email: employee.email,
                company: employee.company?.name,
                hasCourse: Boolean(employee.courseAccount.course)
            }
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Error al iniciar sesión"
        });

    }

};