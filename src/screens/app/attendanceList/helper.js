import axios from 'axios'

export const getAttendanceList = async (empId, month, year, setLoading, setter) => {
    setLoading(true)
    try {
        const res = await axios.get(
            `https://erp.ibos.io/hcm/EmployeeAttendance/GetAttendanceEmployee?EmployeeId=${empId}&month=${month}&YearId=${year}`
        )
        setter(res ?.data)
        setLoading(false)
    } catch (err) {
        setLoading(false)
        //    alert(err.response.data.message)
    }
}

