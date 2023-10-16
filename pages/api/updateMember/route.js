import connectDB from "@/lib/mongoose";
import AddMember from "@/models/addMember"; 

connectDB();

export default async function handler(req, res) {
  if (req.method === 'PATCH') {
    try {
      const updatedData = req.body; // Assuming the updated data is sent in the request body

      // Ensure you have the necessary logic to identify the member to update
      const memberId = updatedData._id; // Assuming the member ID is sent along with the updated data

      // Update the member record
      const updatedMember = await AddMember.findByIdAndUpdate(
        { _id: memberId },
        updatedData,
        { new: true }
      );

      if (!updatedMember) {
        return res
          .status(404)
          .json({ success: false, message: "Member not found" });
      }

      return res.status(200).json({ success: true, data: updatedMember });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
