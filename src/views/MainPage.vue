<template>
<head>
    <title>MSN Messenger Window</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="msn-messenger-window">
        <div class="msn-messenger-header">
            <h1>$MSN Messenger on AVAX</h1>
        </div>
        <div class="msn-messenger-nav">
            <ul>
                <li>

                    <router-link to="/msn">File</router-link>
                </li>
                <li><a href="#">Dexscreener</a></li>
                <li><a href="#">Snowtrace</a></li>
                <li><a href="#">Honeypot</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </div>
        <div class="msn-messenger-body">
            <div class="profile-picture">

                <!-- MSN profile picture or any other image -->
                <center><img src="@/assets/msnpfp.png" alt="SBF"></center>
            </div>
            <input type="email" placeholder="MSNtoken@avax.chain" readonly>
            <div class="password-toggle-container">
                <input :type="showPassword?'password':'text'" value="M$n2000" readonly>
                <!-- Eye icon for password toggle -->
                <span class="password-toggle" @click="showPassword=!showPassword">👁️</span>
            </div>
            Status:
            <select name="status">
                <option value="online">Hodling</option>
                <option value="offline">Online</option>
                <option value="away">Away</option>
                <option value="busy">Busy</option>
            </select>
            <button type="submit"><a href="https://raydium.io/swap/?inputCurrency=J6ppE6LY3x5WUTZBKHNcR8oftbGd1it6WiU7qrrgUtvb&outputCurrency=sol&inputAmount=85.430334046&fixed=in">Sign In</a></button>
        </div>
        <div class="msn-messenger-footer">
            <a href="#">© $MSN. All rights reserved</a>
        </div>
    </div>

</body>

</template>

<style scoped>
        /* ... your existing styles ... */

        .password-toggle-container {
            position: relative;
        }

        .password-toggle {
            cursor: pointer;
            user-select: none;
            position: absolute;
            right: 25px; /* Adjust the position as needed */
            top: 33%;
            transform: translateY(-50%);
            font-size: 18px; /* Adjust the size as needed */
        }

        .password-toggle:hover {
            color: #0072c6; /* Change color on hover */
        }
        input[type="email"]::placeholder {
    font-weight: bold;
        }
    body {
    background: #ffffff;
    /* Old MSN white */
    background: linear-gradient(to bottom, #ffffff, #b3d8f4);
    /* Light blue gradient */
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.msn-messenger-window {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 600px;
    border: 1px solid black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.msn-messenger-header,
.msn-messenger-nav,
.msn-messenger-body,
.msn-messenger-footer {
    text-align: center;
    width: 100%; /* Ensure full width inside the container */
}

.msn-messenger-header {
    background-color: #0072c6;
    color: white;
    padding: 10px;
    text-align: center;
}

.msn-messenger-header h1 {
    font-size: 20px;
    margin: 0;
}

.msn-messenger-nav {
    background-color: #cfcfcf;
    padding: 5px;
}

.msn-messenger-nav ul {
    list-style: none;
    margin-left: 25px !important;
    padding: 0;
}

.msn-messenger-nav li {
    display: inline;
    margin-right: 20px;
}

.msn-messenger-nav a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    /* font-weight: bold; */
    font-size: 14px;
}
.msn-messenger-nav a:hover {
    text-decoration: underline;
}

.msn-messenger-body button:hover {
    background-color: #005a9e; /* Slight color change on hover */
}
.msn-messenger-body {
    padding: 10px;
}

.msn-messenger-body input,
.msn-messenger-body select,
.msn-messenger-body button {
    width: calc(100% - 20px);
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
}

.msn-messenger-body button {
    background-color: #0072c6;
    color: white;
    cursor: pointer;
    height: 50px;
}

.msn-messenger-footer {
    background-color: #f2f2f2;
    padding: 10px;
    text-align: center;
    margin-top: 48px;
}

.msn-messenger-footer a {
    color: black;
    text-decoration: none;
}
/* Add this style for the profile picture */
.profile-picture {
    text-align: center;
    margin-bottom: 10px;
}

.profile-picture img {
    width: 150px; /* Adjust the size as needed */
    height: 150px;
    border-radius: 5%; /* Make it a circle */
    border: 2px solid #0072c6; /* Border color */
    margin-top: 20px;
    margin-bottom: 20px;
}


        body {
    background: #ffffff;
    /* Old MSN white */
    background: linear-gradient(to bottom, #ffffff, #b3d8f4);
    /* Light blue gradient */
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.msn-messenger-window {
    width: 450px;
    height: 600px;
    border: 1px solid black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.msn-messenger-header {
    background-color: #0072c6;
    color: white;
    padding: 10px;
    text-align: center;
}

.msn-messenger-header h1 {
    font-size: 20px;
    margin: 0;
}

.msn-messenger-nav {
    background-color: #cfcfcf;
    padding: 5px;
}

.msn-messenger-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

.msn-messenger-nav li {
    display: inline;
    margin-right: 20px;
}

.msn-messenger-nav a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    /* font-weight: bold; */
    font-size: 14px;
}
.msn-messenger-nav a:hover {
    text-decoration: underline;
}

.msn-messenger-body button:hover {
    background-color: #005a9e; /* Slight color change on hover */
}
.msn-messenger-body {
    padding: 10px;
}

.msn-messenger-body input,
.msn-messenger-body select,
.msn-messenger-body button {
    width: calc(100% - 20px);
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
}

.msn-messenger-body button {
    background-color: #0072c6;
    color: white;
    cursor: pointer;
    height: 50px;
}

.msn-messenger-footer {
    background-color: #f2f2f2;
    padding: 10px;
    text-align: center;
    margin-top: 110px;
}

.msn-messenger-footer a {
    color: black;
    text-decoration: none;
}
/* Add this style for the profile picture */
.profile-picture {
    text-align: center;
    margin-bottom: 10px;
}

.profile-picture img {
    width: 150px; /* Adjust the size as needed */
    height: 150px;
    border-radius: 5%; /* Make it a circle */
    border: 2px solid #0072c6; /* Border color */
    margin-top: 20px;
    margin-bottom: 20px;
}


</style>

<script setup lang="ts">
import { ref } from 'vue';

const showPassword = ref(true)

</script>
