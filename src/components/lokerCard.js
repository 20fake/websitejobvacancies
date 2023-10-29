import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const LokerCard = () => {

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
        handleSubmit,
        handleDetail
    } = handleFunction

    useEffect (() => {
        let fetchData = () => {
            axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                setData([...res.data.data])
                console.log(res);
            })
        }

        if (fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    function formatRupiah(angka, prefix){
        var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split   		= number_string.split(','),
        sisa     		= split[0].length % 3,
        rupiah     		= split[0].substr(0, sisa),
        ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if(ribuan){
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
    }

    return (
        <div className="bg-white border w-full grid h-full grid-cols-4 md:flex-col gap-4" id="cardcontent">
        {
            data !== null && data.length !==0 && data.map((r, num) => {
                return <div key={r.id} className="w-80 p-5">
                    <div className="shadow-lg rounded-xl w-full max-w-xs p-6 bg-white dark:bg-gray-800 overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-start items-center justify-between">
                            <div className="flex items-center justify-start w-full flex-grow">
                            <a href="#" className="block relative">
                                <img alt="profil" src={r.company_image_url} className="mx-auto object-cover rounded-full h-14 w-14" />
                            </a>
                            <div className="flex flex-col items-start ml-4 font-medium">
                                <span className="dark:text-white text-gray-700">
                                {r.company_name}
                                </span>
                                <span className="text-gray-400 font-light text-sm dark:text-gray-300">
                                {r.company_city.slice(0, 23)}
                                </span>
                            </div>
                            </div>
                        </div>
                        <p className="text-gray-800 dark:text-white text-lg mt-4 mb-2">
                            {r.title}
                        </p>
                        <p className="text-gray-400 font-normal text-sm">
                            {r.job_description.slice(0,90)}...
                        </p>
                        <div className="flex items-center rounded justify-between p-2 bg-blue-100 my-6">
                            <div className="flex items-start w-full justify-between">
                            <p className="flex-grow w-full text-xl text-gray-700">
                                <span className="text-gray-400 font-light text-md">
                                IDR
                                </span>
                                {formatRupiah(r.salary_min + "")}
                            </p>
                            <span className="px-3 py-1 flex-none text-sm rounded-full text-indigo-500 border border-indigo-500">
                                {r.job_type}
                            </span>
                            </div>
                        </div>
                        <button onClick={handleDetail} value={r.id} type="button" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Read More
                        </button>
                        </div>
                    </div>
            })
        }
        </div>
    )
}

export default LokerCard;
