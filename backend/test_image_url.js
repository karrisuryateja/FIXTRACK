async function testReports() {
  try {
    // Test getting all reports
    const response = await fetch('http://localhost:3000/api/reports');
    const reports = await response.json();
    
    console.log('Total reports:', reports.length);
    reports.forEach((report, index) => {
      console.log(`Report ${index + 1}:`);
      console.log('  ID:', report._id);
      console.log('  Title:', report.title);
      console.log('  Image URL:', report.imageUrl ? 'Present' : 'Missing');
      if (report.imageUrl) {
        console.log('  Image URL length:', report.imageUrl.length);
      }
      console.log('  ---');
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

testReports();