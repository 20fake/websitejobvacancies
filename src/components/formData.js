import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Cookies from "js-cookie";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const FormData = () => {

    const {state, handleFunction} = useContext(GlobalContext)
    let {
        data,
        setData,
        fetchStatus,
        setFetchStatus,
        currentId,
        setCurrentId,
        input,
        setInput
    } = state

    let {
        handleInput,
        handleEdit,
        handleDelete,
        handleSubmit
    } = handleFunction

    // const token = Cookies.get('token')

    // const getToken = axios.defaults.headers.common = {
    //     'Authorization': 'Bearer ' + token
    // };

    const {variableIdData} = useParams()
    const navigate = useNavigate()

    // const [data, setData] = useState(null)
    // const [fetchStatus, setFetchStatus] = useState(true)
    // const [currentId, setCurrentId] = useState(-1)
    // const [input, setInput] = useState(
    //     {
    //         title : "",
    //         job_description : "",
    //         job_qualification : "",
    //         job_type : "",
    //         job_tenure : "",
    //         job_status : "",
    //         company_name : "",
    //         company_image_url : "",
    //         company_city : "",
    //         salary_min : 0,
    //         salary_max : 0
    //     }
    // )

    useEffect(() => {
        
        if (variableIdData !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${variableIdData}`)
            .then((res) => {
            
            let data = res.data
            console.log(data);

            setInput(
                {
                    title : data.title,
                    job_description : data.job_description,
                    job_qualification : data.job_qualification,
                    job_type : data.job_type,
                    job_tenure : data.job_tenure,
                    job_status : data.job_status,
                    company_name : data.company_name,
                    company_image_url : data.company_image_url,
                    company_city : data.company_city,
                    salary_min : data.salary_min,
                    salary_max : data.salary_max
                }
            )
        })
        }
        
        return () => {
            setInput(
                {
                    title : "",
                    job_description : "",
                    job_qualification : "",
                    job_type : "",
                    job_tenure : "",
                    job_status : "",
                    company_name : "",
                    company_image_url : "",
                    company_city : "",
                    salary_min : 0,
                    salary_max : 0
                }
            )
        }

    }, [fetchStatus, setFetchStatus])

    // const handleInput = (event) => {
    //     let name = event.target.name
    //     let value = event.target.value

    //     setInput({...input, [name]:value})
    // }

    // const handleSubmit = (btnsbmt) => {
    //     btnsbmt.preventDefault()
    //     let {
    //         title,
    //         job_description,
    //         job_qualification,
    //         job_type,
    //         job_tenure,
    //         job_status,
    //         company_name,
    //         company_image_url,
    //         company_city,
    //         salary_min,
    //         salary_max
    //     } = input

    //     if (currentId === -1) {
    //         console.log(currentId);
    //         axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max})
    //         .then((res) => {
    //         console.log(res);
    //         setFetchStatus(true)
    //         navigate('/dashboard')
    //         }) .catch((err) => {
    //             console.log(err);
    //         })
    //     } else {
    //         axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max}, {getToken})
    //         .then((res) => {
    //             console.log(res);
    //             setFetchStatus(true)
    //             navigate('/dashboard')
    //         }) .catch((err) => {
    //             console.log(err);
    //         })
    //     }

    //     setCurrentId(-1)

    //     setInput(
    //         {
    //             title : "",
    //             job_description : "",
    //             job_qualification : "",
    //             job_type : "",
    //             job_tenure : "",
    //             job_status : "",
    //             company_name : "",
    //             company_image_url : "",
    //             company_city : "",
    //             salary_min : 0,
    //             salary_max : 0
    //         }
    //     )
    // }

    return (
        <>
        <div className="bg-slate-800">
        <Navbar />
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center rounded bg-white m-20 w-4/5">
                    <div className="overflow-x-auto relative w-4/5 m-10">
                        
                        <form onSubmit={handleSubmit}> 
                            {/* Tittle */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                                <input type="text" name="title" id="judul" value={input.title} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            {/* Job Description */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Description</label>
                                <input type="text" name="job_description" id="job_description" value={input.job_description} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            {/* Job Qualification */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Qualification</label>
                                <input type="text" name="job_qualification" id="job_qualification" value={input.job_qualification} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            {/* Job Type */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Type</label>
                                <input type="text" name="job_type" id="job_type" value={input.job_type} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            {/* Job Tenure */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Tenure</label>
                                <input type="text" name="job_tenure" id="job_tenure" value={input.job_tenure} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            {/* job status */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Status</label>
                                <input type="text" name="job_status" id="job_status" value={input.job_status} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            {/* company name */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
                                <input type="text" name="company_name" id="company_name" value={input.company_name} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            {/* image url */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Image Url</label>
                                <input type="text" name="company_image_url" id="company_image_url" value={input.company_image_url} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            {/* company city */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company City</label>
                                <input type="text" name="company_city" id="company_city" value={input.company_city} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            {/* salary min */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salary Min</label>
                                <input type="number" name="salary_min" id="salary_min" value={input.salary_min} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            {/* Salary Max */}
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salary Max</label>
                                <input type="text" name="salary_max" id="salary_max" value={input.salary_max} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            </>
    )
}

export default FormData;
