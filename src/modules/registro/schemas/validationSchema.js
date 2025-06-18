// import * as yup from 'yup'

// export const schema = yup.object({
//   nombre: yup.string().required(),
//   email: yup.string().email().required(),
// })

import { object, string } from 'yup'

export const schema = object({
  nombre: string().required(),
  correo: string().email().required(),
})

// export const { schema } = useForm({
//   validationSchema: toTypedSchema(
//     object({
//       nombre: string().required(),
//       email: string().email().required(),
//     }),
//   ),
// })
