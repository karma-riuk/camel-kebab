import {
    Button,
    TextField,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    FormControlLabel,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import "./Demographic.css";
import { useNavigate } from "react-router-dom";
import react_context from "./context";
import { useContext } from "react";

const schema = yup
    .object()
    .shape({
        name: yup.string().required("No name was provided"),
        age: yup
            .number()
            .typeError("Must be a valid age (number)")
            .positive("Your age must be positive")
            .required("No age was provided"),
        prog: yup
            .string()
            .oneOf(["yes", "no"])
            .required("No name was provided"),
    })
    .required();

function getProps({ name, label, className, register, errors }) {
    const { ref: inputRef, ...inputRegisterProps } = register(name);

    return {
        ...inputRegisterProps,
        inputRef: inputRef,
        className,
        name,
        id: name,
        label,
        error: !!errors[name],
        helperText: errors?.[name]?.message,
    };
}

export function Demographic() {
    const navigate = useNavigate();
    const context = useContext(react_context);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const commonProps = { register, errors };

    const nameProps = getProps({
        name: "name",
        label: "Name",
        className: "textField",
        ...commonProps,
    });

    const ageProps = getProps({
        name: "age",
        label: "Age",
        className: "textField",
        ...commonProps,
    });

    // const progProps = getProps({
    //     name: "prog",
    //     className: "textField",
    //     ...commonProps,
    // });

    function onSubmit(data) {
        data.prog = data.prog === "yes";
        console.table(data);
        context.setUserInfo(data)
        navigate("/experiment");
    }

    return (
        <>
            <h1>Before getting started</h1>
            <h2>We would like to get some information from you</h2>
            <form className="demographic" onSubmit={handleSubmit(onSubmit)}>
                <TextField {...nameProps} />
                <TextField {...ageProps} />
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        I already have experience in programming
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="yes"
                        className="radiogroup"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            {...register("prog")}
                            label="Yes"
                        />
                        <FormControlLabel
                            value="no"
                            control={<Radio />}
                            {...register("prog")}
                            label="No"
                        />
                    </RadioGroup>
                </FormControl>
                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </form>
        </>
    );
}
