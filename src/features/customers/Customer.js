import { useSelector } from "react-redux";

function Customer() {
    const fullName = useSelector((store) => store.customer.fullName);
    // useSelector((store) => {
    //     console.log(store.account);
    //     console.log(store.customer);
    // });
    return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
