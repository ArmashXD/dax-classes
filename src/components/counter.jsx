import { useBearStore } from "../stores/bear";
import useCounter from "../stores/counter"
import useUser from "../stores/user";

function Counter() {
    const { count, inc, dec } = useCounter()
    const { user, setUser, clearUser } = useUser()

    const { bears, addABear } = useBearStore();

    return (
        <>
            <div className="">
                <h1 className="text-6xl">Store One</h1>
                <br />
                <div className="text-3xl font-bold underline">
                    <span>{count}</span>
                </div>
                <div className="">
                    <button className="" onClick={inc}>one up</button>
                    <br />
                    <button className="" onClick={dec}>one down</button>
                </div>
            </div>
            <br />
            <div className="">
                <h1 className="text-6xl">Store Two</h1>
                <br />
                <div className="text-3xl font-bold underline">
                    <span>{user.name || '-'}</span>
                </div>
                <div className="">
                    <button className="" onClick={setUser}>Set User</button>
                    <br />
                    <button className="" onClick={clearUser}>Un Set</button>
                </div>

            </div>
            <br />
            <div className="">
                <h1 className="text-6xl">Store Three (Persist)</h1>
                <br />
                <div className="text-3xl font-bold underline">
                    <span>{bears || 0}</span>
                </div>
                <div className="">
                    <button className="" onClick={addABear}>Add Bear</button>
                    <br />
                </div>
            </div>
        </>
    )
}

export default Counter;