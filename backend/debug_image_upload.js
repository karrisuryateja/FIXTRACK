// Simulate what happens when a student submits a report with an image
const fs = require('fs');

// Create a mock FileReader to test the process
class MockFileReader {
  constructor() {
    this.onload = null;
    this.onerror = null;
  }
  
  readAsDataURL(file) {
    // Simulate reading a file
    console.log('Reading file:', file.name);
    
    // Simulate the onload event after a short delay
    setTimeout(() => {
      if (this.onload) {
        // Create a mock result (data URL)
        const mockResult = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
        this.onload({ target: { result: mockResult } });
      }
    }, 100);
  }
}

// Test the report submission process
function testReportSubmission() {
  console.log('Testing report submission with image...');
  
  // Mock report data
  const report = {
    title: 'Test Report',
    block: 'Block 1',
    floor: 'Ground',
    room: '101',
    location: 'Near window',
    category: 'IT',
    priority: 'Medium',
    description: 'This is a test report',
    studentId: 'test@example.com'
  };
  
  console.log('Initial report data:', report);
  
  // Simulate having an image file
  const imageFile = {
    name: 'test-image.png',
    size: 1024,
    type: 'image/png'
  };
  
  console.log('Image file selected:', imageFile.name);
  
  // Handle image upload
  if (imageFile) {
    const reader = new MockFileReader();
    reader.onload = function(e) {
      report.imageUrl = e.target.result; // Store the data URL
      console.log('Image URL added to report:', report.imageUrl ? 'Success' : 'Failed');
      console.log('Final report data with image:', report);
      
      // Simulate submitting the report
      submitReport(report);
    };
    reader.readAsDataURL(imageFile);
  } else {
    console.log('No image file selected');
    submitReport(report);
  }
}

// Simulate report submission
async function submitReport(report) {
  console.log('Submitting report to server...');
  console.log('Report data being sent:', {
    title: report.title,
    block: report.block,
    floor: report.floor,
    room: report.room,
    location: report.location,
    category: report.category,
    priority: report.priority,
    description: report.description,
    imageUrl: report.imageUrl ? 'Present' : 'Missing',
    studentId: report.studentId
  });
  
  // In a real application, this would be sent to the server
  console.log('In a real application, this data would be sent to /students/reports endpoint');
}

// Run the test
testReportSubmission();