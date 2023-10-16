import connectDB from "@/lib/mongoose";
import AddMember from "@/models/addMember"; 

connectDB();

async function updateDocument(req, res) {
   
    const { visible, id } = req.body; // assuming the update is passed in the request body

try {
    console.log("id: ", req.body);

    // Update the member record
    const updatedMember = await AddMember.findByIdAndUpdate(
      { _id: id },
      {visible: visible},
      { new: true }
    );

      if (!updatedMember) {
          return res
          .status(404)
          .json({ success: false, message: "Member not found" });
      }

      return res.status(200).json({ success: true, data: updatedMember });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error.' });
  }
        res.status(200).json({ message: "all set" });
}

export default updateDocument;
