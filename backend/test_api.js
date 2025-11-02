async function testApi() {
  try {
    const response = await fetch('http://localhost:3000/students/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Test Report with Image',
        block: 'Block 1',
        floor: 'Ground',
        room: '101',
        location: 'Near window',
        category: 'IT',
        priority: 'Medium',
        description: 'This is a test report with image',
        imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
        studentId: 'test@example.com'
      })
    });
    
    const result = await response.json();
    console.log('API Response:', result);
    console.log('Image URL present in response:', result.imageUrl ? 'Yes' : 'No');
  } catch (error) {
    console.error('Error:', error);
  }
}

testApi();