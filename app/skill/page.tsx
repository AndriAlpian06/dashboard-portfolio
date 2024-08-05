import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TableSkill } from "./table_skill";

export default function SkillPgae(){
    return(
        <>
            <div className="px-4">
                <Card className="col-span-3">
                    <CardHeader>
                    <CardTitle>Data Skill</CardTitle>
                    <CardDescription>
                        You made 8 skill this month.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <TableSkill />
                    </CardContent>
                </Card>
            </div>
        </>
    )
}