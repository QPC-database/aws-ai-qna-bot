module.exports=[


{
    title:"Provision a Connect Instance",
    text:`
Complete  [Tutorial 1: Set up your Amazon Connect Instance](https://docs.aws.amazon.com/connect/latest/adminguide/tutorial1-set-up-your-instance.html)
    `,
    image:"../images/connect_create_instance.png"
},{
    title:"Add QnABot to Contact Flows",
    text:`
- Now we must make the QnABot accessible to our new call center. 
<br/> 
&#8291;1. Open the  <a href="https://console.aws.amazon.com/connect">Amazon Connect console</a> in a new tab  <br/>
&#8291;2. Select Contact Flows <br/>
&#8291;3. Select <b><span id='spnBotname'>your bot</span></b> in the drop down <br/>
&#8291;4. Click add Lex Bot
    `,
    image:"../images/connect_01.png"
},{
    title:"Open Contact Flows",
    text:`
&#8291;1. Go back to the call center admin page by clicking on <b>Amazon Connect</b> and choosing your instance <br/>
&#8291;2.  Select Contact Flows
    `,
    image:"../images/connect_02.png"
},
{
    title:"Create New Contact Flow",
    text:`

- Then 'Create contact flow':
    `,
    image:"../images/connect_03.png"
},
{
    title:"Import Contact Flow",
    text:`
&nbsp;1. Choose DOWNLOAD button below to download a JSON contact flow file for QnABot <br/>
&nbsp;2. In Connect, choose Save->Import flow to import the downloaded file from your computer <br/>
`,
    image:"../images/connect_04.png",
    buttons:[{
        text:"Download",
        id:"DownloadContactFlow",
        loading:false
    }]
},
{
    title:"Save and Publish",
    image:"../images/connect_06.png",
    text:`
- Save and Publish your flow when you are done.
`
},
{
    title:"Assign Contact Flow to Phone Number",
    image:"../images/connect_07.png",
    text:`
&nbsp;1. Go back to the Dashboard <br/>
&nbsp;2. Choose 'Phone numbers' <br/>
&nbsp;3. Click on your Phone number to open the 'Edit Phone number' page <br/>
`
},
{
    title:"Select the Contact Flow",
    image:"../images/connect_08.png",
    text:`
&nbsp; Choose the contact flow you just created and click save.
`
},
{
    title:"Import Questions",
    text:`
&nbsp; 1. Choose  <a href="#/import"> Import </a> from the tools menu ( &#9776; ): <br/>
&nbsp; 2. Open Examples/Extensions, and choose LOAD from the 'ConnectWizardQnA' example <br/> 

    `,
    image:"../images/content_designer_02.png"
},
{
    title:"Test your call center.",
    text:`
- Call your Connect phone number 
- You can ask questions such as <br/>
&#8291; 1. "Where can I get additional information on QnABot?"<br/> 
&#8291; 2. "When is your business open"<br/> 
&#8291; 3. "Read me the U.S. Constitution" <br/>
&#8291; 4. "Can you call me?" <br/> 
&#8291; 5. To hang up say "Goodbye" <br/> 
    `,
}
]
