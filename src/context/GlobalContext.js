import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";


export const GlobalContext = createContext()

export const GlobalProvider = props => {
    
    const navigate = useNavigate()

    const token = Cookies.get('token')

    const getToken = axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + token
    };

    const [data, setData] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)
    const [input, setInput] = useState(
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

    let state = {
        data,
        setData,
        fetchStatus,
        setFetchStatus,
        currentId,
        setCurrentId,
        input,
        setInput
    }

    //Function

    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
        console.log(idData);
        
        setCurrentId(idData)
        navigate(`/edit/${idData}`)

        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((res) => {
            console.log(res);
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

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)

        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((res) => {
            setFetchStatus(true)
        })
    }

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({...input, [name]:value})
    }

    const handleDetail = (event)  => {
        let idData = parseInt(event.target.value)
        console.log(idData);
        setCurrentId(idData)
        navigate(`/detail/${idData}`)


        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((res) => {
            console.log(res);

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

    }

    const handleSubmit = (btnsbmt) => {
        btnsbmt.preventDefault()
        let {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max
        } = input

        if (currentId === -1) {
            console.log(currentId);
            axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max})
            .then((res) => {
            console.log(res);
            setFetchStatus(true)
            navigate('/dashboard')
            }) .catch((err) => {
                console.log(err);
            })
        } else {
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max}, {getToken})
            .then((res) => {
                console.log(res);
                setFetchStatus(true)
                navigate('/dashboard')
            }) .catch((err) => {
                console.log(err);
            })
        }

        setCurrentId(-1)

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

    let handleFunction = {
        handleInput,
        handleEdit,
        handleDelete,
        handleSubmit,
        handleDetail
    }

    return (
        <GlobalContext.Provider value = {{state, handleFunction}}>
            {props.children}
        </GlobalContext.Provider>
    )

}
