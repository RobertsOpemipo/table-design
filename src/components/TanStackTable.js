import { USERS } from "../data";

const TanStackTable = () => {
    return (
        <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
            {
                JSON.stringify(USERS)
            
            
            }
        </div>
    );
};

export default TanStackTable;