<h1>BLOG APPLICATION</h1>

<p>

This application leverages MindsDB to deliver intelligent chat assistance and automatically categorize each post into specific categories. Users can view all posts, comment on them, like their favorites, and create new posts. The app uses token-based authentication to ensure secure access and interactions. Additionally, users have the ability to report posts, helping to maintain content quality and compliance with community standards.

</p>
<hr>

## Tech Stack

- **Frontend:** NextJs, Tailwind CSS
- **Backend:** Next Js
- **Database:** Postgres DB

## Video Demonstration

[Watch my Loom video](https://www.loom.com/share/999e9aaeb32940739632c095bdcb16aa?sid=c76806a1-f328-498f-9986-889378fb2568)

## ScreenShots

![image](https://github.com/user-attachments/assets/383ac172-0fd0-4ee0-bbba-1e7ec86f9389)
![image](https://github.com/user-attachments/assets/d3893b01-69a0-4a83-8a08-1691c1487f5b)
![image](https://github.com/user-attachments/assets/7cba4050-4f02-428a-93b9-fbece2e3a1d9)
![image](https://github.com/user-attachments/assets/67fdd6fc-b1d2-4a1f-936b-2fc795c3f9b1)
![image](https://github.com/user-attachments/assets/855fae65-29a8-455d-9c19-ae9a2204c115)

## Setup and Contributions Guidelines

$~$

## :outbox_tray: Set up

These are the steps required to install/run the project.

1.  **Create a new branch:**

    ```bash
    git checkout -b your-branch-name
    ```

2.  **Clone the repository into the new branch:**

    ```bash
    git clone https://github.com/your-username/your-repository.git .
    ```

3.  **Create `.env` file in the root folder:**

    ```bash
     DATABASE_URL=<YOUR_dB_URL>"
    SECRET_KEY=<your secret key>
    MINDSDB_KEY=<your api key>
    MINDS_URL=<minds url>
    BASE_URL=<application url>
    ```

4.  **Install dependencies:**

        ```bash
        npm install
        ```

    5.**Create minds db Docker container:**

        ```bash
        docker run --name mindsdb_container -p47334:47334 -p47335:47335 mindsdb/mindsdb
        ```

5.  **Start the application:**

    ```bash
    npm run dev
    ```

6.  **Use the GUI provided by the docker container to create models**

    - Go the editor router of that docker container url

7.  **Now you are all set to start working on this project and do some contributions:**

    - Make your changes.
    - Stage and commit your changes.
    - Push your changes to your branch:

      ```bash
      git push origin your-branch-name
      ```

## Work in Progress

This project is still under active development. Feel free to contribute or check back later for updates.
