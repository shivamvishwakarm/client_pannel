import Layout from '@/components/Layout'
import React from 'react'
import { useState } from 'react';

export const Transfer_money = () => {

    const [beneficiaryName, setBeneficiaryName] = useState('');
    const [beneficiaryAccountNo, setBeneficiaryAccountNo] = useState('');
    const [confirmAccountNo, setConfirmAccountNo] = useState('');
    const [selectedBank, setSelectedBank] = useState('');
    const [ifscCode, setIFSCCode] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log({
            beneficiaryName,
            beneficiaryAccountNo,
            confirmAccountNo,
            selectedBank,
            ifscCode,
            amount,
        });
    };

    const bankOptions = [
        { value: '', label: 'Select Beneficiary Bank' },
        { value: 'bank_of_baroda', label: 'Bank of Baroda' },
        { value: 'bank_of_india', label: 'Bank of India' },
        { value: 'bank_of_maharashtra', label: 'Bank of Maharashtra' },
        { value: 'canara_bank', label: 'Canara Bank' },
        { value: 'central_bank_of_india', label: 'Central Bank of India' },
        { value: 'indian_bank', label: 'Indian Bank' },
        { value: 'hdfc_bank', label: 'HDFC' },
        { value: 'idbi_bank', label: 'IDBI' },
        { value: 'sbi_bank', label: 'State Bank Of India' },
        { value: 'kotak_mahindra_bank', label: 'Kotak Mahindra Bank' },
        { value: 'induslnd_bank', label: 'Indusland Bank' },
        { value: 'indian_overseas_bank', label: 'Indian Overseas Bank' },
        { value: 'punjab_and_sind_bank', label: 'Punjab and Sind Bank' },
        // Add more banks as needed
    ];


    return (
        <Layout>
            <div className="max-w-xl mx-auto p-4">
                <div className='text-center	flex flex-col py-4'>
                    <h1 className='bg-green-400 px-4 py-4'>Transfer Money</h1>
                    <p className='bg-violet-700 '>
                        NATIONAL ELECTRONIC FUNDS TRANSFER (NEFT)
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 border border-black	 py-8 px-8">
                    <div>
                        <label htmlFor="beneficiaryName" className="block mb-1 font-medium">
                            Beneficiary Name:
                        </label>
                        <input
                            type="text"
                            id="beneficiaryName"
                            placeholder="Enter beneficiary's name"
                            value={beneficiaryName}
                            onChange={(e) => setBeneficiaryName(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="beneficiaryAccountNo" className="block mb-1 font-medium">
                            Beneficiary Account No:
                        </label>
                        <input
                            type="text"
                            id="beneficiaryAccountNo"
                            placeholder="Enter beneficiary's account number"
                            value={beneficiaryAccountNo}
                            onChange={(e) => setBeneficiaryAccountNo(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmAccountNo" className="block mb-1 font-medium">
                            Confirm Account No:
                        </label>
                        <input
                            type="text"
                            id="confirmAccountNo"
                            placeholder="Confirm account number"
                            value={confirmAccountNo}
                            onChange={(e) => setConfirmAccountNo(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="selectedBank" className="block mb-1 font-medium">
                            Select Beneficiary Bank:
                        </label>
                        <select
                            id="selectedBank"
                            value={selectedBank}
                            onChange={(e) => setSelectedBank(e.target.value)}
                            className="border p-2 w-full"
                            required
                        >
                            {bankOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="ifscCode" className="block mb-1 font-medium">
                            IFSC Code:
                        </label>
                        <input
                            type="text"
                            id="ifscCode"
                            placeholder="Enter IFSC code"
                            value={ifscCode}
                            onChange={(e) => setIFSCCode(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="amount" className="block mb-1 font-medium">
                            Enter Amount:
                        </label>
                        <input
                            type="number"
                            id="amount"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Transfer_money;
