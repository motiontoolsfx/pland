import "../../table.css";

export default function MasterSchedule() {
    const scheduleData = [
        { teacher: "Mr. Smith", department: "Math", room: "101" },
        { teacher: "Ms. Johnson", department: "Science", room: "202" },
        { teacher: "Mrs. Lee", department: "English", room: "303" },
        { teacher: "Mr. Garcia", department: "History", room: "104" },
        { teacher: "Ms. Patel", department: "Art", room: "205" }
    ];

    const periods = ["1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A", "1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B"];

    return (
        <table>
            <thead>
                <tr>
                    <th>Teacher</th>
                    <th>Department</th>
                    <th>Room</th>
                    {periods.map(period => (
                        <th key={period}>{period}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {scheduleData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.teacher}</td>
                        <td>{row.department}</td>
                        <td>{row.room}</td>
                        {periods.map(period => (
                            <td key={period}></td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
