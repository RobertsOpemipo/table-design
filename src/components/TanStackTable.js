import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { USERS } from "../data";
import { useState } from "react";


const TanStackTable = () => {

    const columnHelper = createColumnHelper()

    const columns = [
        columnHelper.accessor("",{
            id:"S.No",
            cell:(info) => <span>{info.row.index + 1}</span>,
            header:"S.No",
        }),

        columnHelper.accessor("profile",{
            cell:(info)=>(
                <img 
                    src={info.getValue()} 
                    alt="..." 
                    className="rounded-full w-10 h-10 object-cover" 
                />
            ),
            header: "Profile",
        }),


        columnHelper.accessor("firstName",{
            cell: (info)=> <span>{info.getValue()}</span>,
            header:'First Name',
        }),

        columnHelper.accessor("lastName",{
            cell: (info)=> <span>{info.getValue()}</span>,
            header:'Last Name',
        }),

        columnHelper.accessor("age",{
            cell: (info)=> <span>{info.getValue()}</span>,
            header:'Age',
        }),

        columnHelper.accessor("visits",{
            cell: (info)=> <span>{info.getValue()}</span>,
            header:'Visits',
        }),        
        
        columnHelper.accessor("progress",{
            cell: (info)=> <span>{info.getValue()}</span>,
            header:'Progress',
        }),
    ]


    const [data] = useState(() => [...USERS]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
    })
    
    return (



        <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
            <table>
                <thead>
                    {
                        table.getHeaderGroups().map((headerGroup)=>(
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header=>(
                                        <th key={header.id}>
                                            {
                                                flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                    )
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>

                <tbody>
                    {
                        table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row,i) => (
                                <tr key={row.id}></tr>
                            ))
                        ) : null                    
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TanStackTable;