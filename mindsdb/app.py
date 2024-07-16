import mindsdb_sdk
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


# query



# Connect to the MindsDB server
server = mindsdb_sdk.connect()

# Get the project
project = server.get_project("mindsdb")

# Create the model with updated prompt template
project.models.create(
    name="data_retriever",
    predict="output",
    engine="minds_endpoint_engine",
    max_tokens=800,
    model_name="mistral-7b",
    prompt_template='''
    You are an AI-powered data retrieval assistant. I will provide you with a query about a specific topic. Your task is to retrieve relevant information and provide a detailed, accurate, and informative response. The response should be structured as follows:

    - **Topic Overview**: A brief overview of the topic.
    - **Details**: Detailed information related to the query.
    - **Sources**: Any sources or references where the information can be verified.

    Ensure that the response is informative and comprehensive, formatted using Markdown.

    Here is the query:

    {{query}}
    '''
)
