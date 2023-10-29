import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

const DetailData = () => {

    const {idDetail} = useParams()

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

    useEffect (() => {
        // if (idDetail !== undefined) {
            let fetchData = () => {
                axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idDetail}`)
                .then((res) => {
                    let data = res.data
                    console.log(data);

                    setData(
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

                }) .catch((err) => {
                    console.log(err);
                })
        // }

        if (fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }
        
    }}, [fetchStatus, setFetchStatus])

    console.log(data);

    return (
        <>
        <Navbar/>
        <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center shadow-md rounded m-10 w-3/4">
            <img className="rounded-full h-20 w-20 m-5" src={data.company_image_url}/>
            <div className="m-10">
                <h1>{data.title}</h1>
                <h1>{data.job_description}</h1>
                <h1>{data.job_qualification}</h1>
                <h1>{data.job_status}</h1>
                <h1>{data.job_tenure}</h1>
                </div>
        </div>
        </div>
        </>
    )
}

export default DetailData;
