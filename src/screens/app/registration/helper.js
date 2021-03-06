import axios from 'axios'
import { Toast } from 'native-base'

export const getCustomerList = async (id, setter) => {

    try {
        const res = await axios.get(
            `https://erp.ibos.io/partner/PManagementCommonDDL/GetCustomerListSalesForceDDL?EmployeeId=${id}`
        )
        setter(res?.data)
    } catch (err) {
       
    //    console.log(err.response.data,null,2)
    //    alert(err.response.data.message)
    }
}


export const registerAttentance = async (payload,setIsLoading) => {
    setIsLoading(true)
    try {
        const res = await axios.post(
            `https://erp.ibos.io/partner/PartnerLocationRegister/CreatPartnerLocationRegister`,payload
        )
        setIsLoading(false)
        Toast.show({
            text: res.message || "Created Successfull",
            buttonText: "close",
            type: "success",
            duration: 3000
        })
        
    } catch (err) {
        // alert(err.response.data.message)
        setIsLoading(false)
        Toast.show({
            text: err.response.data.message,
            buttonText: "close",
            type: "danger",
            duration: 3000
        })
    }
}