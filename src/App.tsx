import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "./schemas/user.schema";

function App() {
  interface FormValues {
    first_name: string;
    last_name: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
    },
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(`Success: ${JSON.stringify(data)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="main-container">
      <div className="form-field-container">
        <label htmlFor="first_name">First Name:</label>
        <input
          id="first_name"
          className="text-input"
          {...register("first_name", { required: "First name is required" })}
        />
        {errors.first_name && (
          <p className="error-field">{errors.first_name.message}</p>
        )}
      </div>
      <div className="form-field-container">
        <label htmlFor="last_name">Last Name:</label>
        <input
          id="last_name"
          className="text-input"
          type="last_name"
          {...register("last_name", { required: "Last name is required" })}
        />
        {errors.last_name && (
          <p className="error-field">{errors.last_name.message}</p>
        )}
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default App;
