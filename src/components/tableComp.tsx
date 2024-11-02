/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
export async function TableDemo() {
    let data;
    let lastModified;
    const url = "https://raw.githubusercontent.com/yashppawar/genai-cloud-jam-website/refs/heads/main/src/public/output.json";
   
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const response1 = await fetch(url, {
            method: 'HEAD', 
          });
        
           lastModified = response1.headers.get('date') || 'Not available';
           
        console.log(lastModified)


        data = await response.json();
        // console.log(json);
    } catch (error: any) {
        console.error(error.message);
    }

    return (
        <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead className="text-white">Name</TableHead>
                    {/* <TableHead>Redemption Status</TableHead> */}
                    <TableHead className="text-white">
                        Skill Badges Completed
                    </TableHead>
                    <TableHead className="text-center text-white">
                        Arcade Game Completed
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((data: any) => (
                    <TableRow key={data.user_name} className={clsx({
                      'text-info': true,
                      'text-success': data.num_badges_completed === 15 && data.num_arcade_games_completed === 1,
                      'text-warning': data.num_badges_completed === 0 && data.num_arcade_games_completed === 0,
                      'text-error': data.redemption_status === 'No',
                    })}>
                        <TableCell className="font-medium">
                            {data.user_name}
                        </TableCell>
                        {/* <TableCell>{invoice.paymentStatus}</TableCell> */}
                        <TableCell className="text-center">
                            {data.num_badges_completed}
                        </TableCell>
                        <TableCell className="text-center">
                            {data.num_arcade_games_completed}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>
                    Updated on {lastModified}
                        {/* Updated on {October 18th 2024 12:30 IST} */}
                    </TableCell>
                    {/* <TableCell className="text-right">$2,500.00</TableCell> */}
                </TableRow>
            </TableFooter>
        </Table>
    );
}
