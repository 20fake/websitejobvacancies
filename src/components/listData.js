import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GlobalContext } from "../context/GlobalContext";

const ListData = () => {

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
    
    // const navigate = useNavigate()

    useEffect (() => {
        let fetchData = () => {
            axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                // console.log(res);
                setData([...res.data.data])
                // console.log(data);
            })
        }

        if (fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }
        
    }, [fetchStatus, setFetchStatus])

    // const handleEdit = (event) => {
    //     let idData = parseInt(event.target.value)
    //     console.log(idData);
        
    //     setCurrentId(idData)
    //     navigate(`/edit/${idData}`)

    //     axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
    //     .then((res) => {
    //         console.log(res);
    //         let data = res.data
    //         console.log(data);

    //         setInput(
    //             {
    //                 title : data.title,
    //                 job_description : data.job_description,
    //                 job_qualification : data.job_qualification,
    //                 job_type : data.job_type,
    //                 job_tenure : data.job_tenure,
    //                 job_status : data.job_status,
    //                 company_name : data.company_name,
    //                 company_image_url : data.company_image_url,
    //                 company_city : data.company_city,
    //                 salary_min : data.salary_min,
    //                 salary_max : data.salary_max
    //             }
    //         )
    //     })
    // }

    // const token = Cookies.get('token')

    // axios.defaults.headers.common = {
    //     'Authorization': 'Bearer ' + token
    // };

    // const handleDelete = (event) => {
    //     let idData = parseInt(event.target.value)

    //     axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
    //     .then((res) => {
    //         setFetchStatus(true)
    //     })
    // }

    return (
        <>
        <div className="flex items-center flex-col justify-center mt-10">
            <div className="overflow-x-auto overflow-y-auto h-5/6 flex items-center max-w-screen-lg shadow-md sm:rounded-lg mb-20 z-40">
                    <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-white uppercase bg-blue-600 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-3">
                                NO
                            </th>
                            <th scope="col" className="py-3 px-5">
                                Title
                            </th>
                            <th scope="col" className="py-5 px-5">
                                Job_Description
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Job_Qualification
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Job_Type
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Job_Tenure
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Status
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Company_Name
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Company_Image_Url
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Company_City
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Salary_Min
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Salary_Max
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            data !== null && data.length !==0 && data.map((r, num) => {
                                return <tr key={r.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        {num + 1}
                                    </th>
                                    <td className="py-1 px-3">
                                        {r.title}
                                    </td>
                                    <td className="py-1 px-1">
                                        {r.job_description.substring(0, 60)} ...
                                    </td>
                                    <td className="py-1 px-1">
                                        {r.job_qualification.substring(0, 30)} ...
                                    </td>
                                    <td className="py-1 px-1">
                                        {r.job_type}
                                    </td>
                                    <td className="py-1 px-1">
                                        {r.job_tenure}
                                    </td>
                                    <td className="py-1 px-1">
                                        {
                                            r.job_status? <span>Tersedia</span>:<span>Tertutup</span>
                                        }
                                    </td>
                                    <td className="py-1 px-1">
                                        {r.company_name}
                                    </td>
                                    <td className="py-1 px-1">
                                        {r.company_image_url.substring(0, 50)} ...
                                    </td>
                                    <td className="py-1 px-1">
                                        {r.company_city.substring(0, 20)}
                                    </td>
                                    <td className="py-1 px-1">
                                        {r.salary_min}
                                    </td>
                                    <td className="py-1 px-1">
                                        {r.salary_max}
                                    </td>
                                    <td className="py-6 px-6 items-center justify-center flex">
                                        <button onClick={handleEdit} value={r.id} className="bg-lime-400 hover:bg-lime-500 text-white py-3 px-3 rounded-lg">Edit</button>
                                        <button onClick={handleDelete} value={r.id} className="bg-red-500 hover:bg-red-600 text-white py-3 px-3 rounded-lg ml-5">Delete</button>
                                    </td>
                                    </tr>
                            })
                        }
                    </tbody>
                    </table>
                    </div>
            </div>
        </>
    )
}

export default ListData;
