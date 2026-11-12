import { ErrorMessage, Field, Form, Formik } from 'formik'
import Button from '../../../components/Shared/Button'
import { loginSchema } from './validation'

const Login = () => {

    const handleSubmit = (values) => {
        console.log(values)
    }
    return (
        <div className='h-full flex justify-center items-center'>
            <Formik initialValues={{
                userName: "",
                password: ""
            }}
                onSubmit={handleSubmit}
                validationSchema={loginSchema}


            >
                <Form className='shadow-2xl flex items-center flex-col gap-6 p-5 w-150 max-w-full'>
                    <h1 className='text-center text-4xl font-bold'>welcome </h1>
                    <div className='flex flex-col gap-2 '>
                        <Field
                            name="userName"
                            className=" outline-0 border rounded-lg border-gray-300 focus:border-2  focus:border-indigo-500 py-1 px-7 duration-300"
                            placeholder="User Name" />
                        <ErrorMessage name='userName'
                            component={"p"} className='text-red-500 font-bold' />
                        <Field
                            name="password"
                            type="password"
                            className=" outline-0 border rounded-lg border-gray-300 focus:border-2  focus:border-indigo-500 py-1 px-7 duration-300"
                            placeholder="Password" />
                        <ErrorMessage name='password'
                            component={"p"} className='text-red-500 font-bold' />
                    </div>
                    <Button>Login</Button>
                



                </Form>

            </Formik>

        </div>
    )
}

export default Login
