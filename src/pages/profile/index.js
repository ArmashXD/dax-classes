import { useNavigate, useParams } from "react-router"

const user = [{
    id: 1,
    name: 'armash',
    age: 23,
    occupation: "web developer"
}]


function ProfilePage() {
    const params = useParams();

    const foundUser = () => {
        if (user.find((item) => item.id === parseInt(params.id))) {
            return 'Not found'
        }

        return user.find((item) => item.id === parseInt(params.id));
    };

    return (
        <div> {foundUser().name}</div>
    )
}
export default ProfilePage