import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import {useQuery} from "@tanstack/react-query";
import {fetchMock} from "../api/mockapi";
import {useMemo} from "react";
import {ActionMeta, MultiValue} from "react-select";
import {IOption, useStore} from '../store/inputState'
import "./input.css"

export const Input = () => {

	const { updateInput, calculate, result, values } = useStore();

	const handleChange = (newValue: MultiValue<IOption>, actionMeta: ActionMeta<IOption>) => {
		updateInput(newValue)
		calculate()
	}

	const { data, isLoading } = useQuery({ queryKey: ['mock'], queryFn: fetchMock })

	const options = useMemo<IOption[]>(() => {
		if (data) {
			return data.map((el) => ({...el, label: el.name}))
		}
		else return []
	}, [data])

	return (
		<div className="wrapper">
			<div>
				<p>
					Result: {result}
				</p>
				<p>
					Values: {values}
				</p>
			</div>
			<CreatableSelect
				isMulti
				options={options}
				onChange={handleChange}
				isLoading={isLoading}
				components={animatedComponents}
			/>
		</div>
)}

const animatedComponents = makeAnimated();
