import { Controller, useForm } from "react-hook-form"


export const ReactHookFormExample = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    })
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                className="form-control"
                control={control}
                render={({ field }) => <input {...field} />}
            />

            <Controller
                name="lastName"
                className="form-control"
                control={control}
                render={({ field }) => <input {...field} />}
            />

            <input type="submit" />
        </form>
    )
}