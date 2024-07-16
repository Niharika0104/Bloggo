const MindsDB = require('mindsdb-js-sdk');

const connectDB = async () => {
  try {
    // No authentication needed for self-hosting
    const connection = await MindsDB.default.connect({
      host: 'https://probable-space-rotary-phone-7q6vpjg4457hpr4g-47334.app.github.dev/'
    });
    console.log('connected');
    return connection;
  } catch (error) {
    // Failed to connect to local instance
    console.log(error);
  }
}

const fetchProjects = async (connection) => {
  try {
    const projects = await MindsDB.default.Projects.getAllProjects();
    console.log(projects);
    return projects;
  } catch (error) {
    console.log(error);
  }
}

const fetchData = async () => {
  try {
    const response = await MindsDB.default.SQL.client.post('/api/ai/query', {
      json: {
        query: 'SELECT * FROM example_db.demo_data.home_rentals LIMIT 10;'
      }
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const main = async () => {
  const connection = await connectDB();
  console.log(connection)

   // await fetchProjects(connection);
   const res= await fetchData();
   console.log(res)
  
}

main();

