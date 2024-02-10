import React, { useRef } from "react";
import { CloudUploadOutlined } from "@material-ui/icons";
import { Button } from "@material-ui/core";

export default function ModelAnalysis() {
    const fileInputRef = useRef(null)

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileSelected = (event) => {
        const fileList = event.target.files;
        console.log("Selected files:", fileList);
        // You can perform further operations with the selected files
    };

    return (
        <div className="h-screen bg-gray-200 flex justify-center items-center gap-8">
            <div className="bg-white h-90 w-1/6 ml-8 rounded-3xl"></div>
            <div className="bg-white h-90 w-5/6 mr-8 rounded-3xl flex justify-center items-center">
                <div className="h-80 w-96 bg-sky-100 rounded-3xl border-4 border-dashed border-blue-800 flex flex-col justify-center items-center">
                    <CloudUploadOutlined style={{ fontSize: 90, color: '#1e40af' }} />
                    <h1 className="text-blue-800 font-semibold text-lg">Drag and Drop Files</h1>
                    <div className="flex justify-center items-center gap-4 my-3">
                        <div style={{ borderTop: '1px solid #6b7280', width: '50px', height: '1px' }}></div>
                        <p className="text-gray-500 text-sm">Or</p>
                        <div style={{ borderTop: '1px solid #6b7280', width: '50px', height: '1px' }}></div>
                    </div>
                    <Button 
                        variant="contained" 
                        size="large" 
                        style={{ 
                            backgroundColor: '#1e40af', 
                            color: 'white', 
                            fontWeight: 'bold', 
                            borderRadius: '20px',
                            textTransform: 'none'
                        }}
                        onClick={handleButtonClick}
                    >
                        Browse
                    </Button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileSelected}
                    />
                </div>
            </div>
        </div>
    )
}
