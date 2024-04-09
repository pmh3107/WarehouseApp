// AuthForm.tsx
import React from "react";

// Can use it simply like Nav component.
// const headerLinks = ..... in fields;
// call it with {field, onchange, onsubmit}

type Field = {
	label: string;
	type: string;
	id: string;
	name: string;
	placeholder?: string;
};

type AuthFormProps = {
	fields: Field[];
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ fields, onSubmit, onChange }) => {
	return (
		<form
			onSubmit={onSubmit}
			className="pt-4 flex flex-col justify-center gap-4"
			action="POS"
		>
			{fields.map((field) => (
				<div key={field.id} className="flex flex-col gap-2">
					<label
						className="w-fit px-2 ml-3 -mb-5 z-0 bg-white text-xl font-medium text-gray-500"
						htmlFor={field.id}
					>
						{field.label}
					</label>
					<input
						onChange={onChange}
						type={field.type}
						id={field.id}
						name={field.name}
						required
						placeholder={field.placeholder}
						className="border-2 border-gray-500 rounded-lg w-full py-4 px-4 focus:outline-none focus:ring-2  focus:border-transparent focus:border-blue-500 focus:ring-opacity-75"
					/>
				</div>
			))}
			<button
				className="w-full border-2 rounded-lg bg-blue-400 text-white font-medium py-2 px-4 mt-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-75"
				type="submit"
			>
				Đăng nhập
			</button>
		</form>
	);
};

export default AuthForm;
