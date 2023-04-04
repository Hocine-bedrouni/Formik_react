import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//    min 5 caractères, requi : 1 Majuscule, 1 minuscule, 1 chiffre

export const basicSchema = yup.object().shape({
     email: yup.string().email("email non valide").required("Required"),
     age: yup.number().positive().integer().required("Required"),
     password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Veuillez créer un Mot de passe plus difficile"})
        .required("Required"),
    confirmPass: yup
        .string()
        .oneOf([yup.ref("password"), null])
        .required("Required"),

});

export const advancedSchema = yup.object().shape({
    username : yup
        .string()
        .min(3, "Doit contenir 3 caractère minimum")
        .required("Required"),
    jobType: yup
        .string()
        .oneOf(["designer", "developer", "manager", "other"], "pas la bonne catégorie")
        .required("Required"),
    acceptedTos: yup
        .boolean()
        .oneOf([true], "Please accept the terms of service")
});