Public Class FromtheHeart
    Inherits System.Windows.Forms.Form

    'Declare global variables
    Dim firstName as String 
    Dim LastName as String
    Dim age as Integer
    Dim favoriteColor as String
    Dim phoneNumber as Integer 

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

    firstName = ""
    LastName = ""
    age = 0
    favoriteColor = ""
    phoneNumber = 0

    End Sub

    Private Sub button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

    'Prompt user to enter their first name 
    firstName = InputBox("Please enter your first name: ", "First Name Input")

    'Prompt user to enter their last name 
    lastName = InputBox("Please enter your last name: ", "Last Name Input")

    'Prompt user to enter their age 
    age = InputBox("Please enter your age: ", "Age Input")

    'Prompt user to enter their favorite color 
    favoriteColor = InputBox("Please enter your favorite color: ", "Favorite Color Input")

    'Prompt user to enter their phone number
    phoneNumber = InputBox("Please enter your phone number: ", "Phone Number Input")

    ' Output to from 
    MessageBox.Show(" First Name: " & firstName & vbcrlf & "Last Name: " & lastName & vbCrLf & "Age: " & age & vbCrlf & "Favorite Color: " & favoriteColor & vbCrlf & "Phone Number: " & phoneNumber) 

    End Sub 

    Private Sub button2_Click(sender As Object, e As EventArgs) Handles Button2.Click

    Dim cardMessage As String = ""

    cardMessage = " To " & firstName & " From the heart "

    cardMessage &= "I wish you a very happy " & age & "th birthday. You are a wonderful person who is greatly loved and appreciated. Wishing you good luck and may all of your dreams come true. " 

cardMessage &= " I hope you enjoy your special day and may the color of your favorite color, " & favoriteColor & " bring you extra joy and happiness. " 

cardMessage &= " Hugs and kisses, 

Your Name"

    MessageBox.Show(cardMessage, "From the Heart")

    End Sub

    Private Sub button3_Click(sender As Object, e As EventArgs) Handles Button3.Click

    Dim textMessage As String = ""

    textMessage = " Happy " & age & "th birthday " & firstName & "!" & vbCrLf

    textMessage &= " I hope you have a wonderful day and may the color of your favorite color, " & favoriteColor & " bring you extra joy and happiness. " 

textMessage &= " Wishing you all the best. 

Your Name"

    MessageBox.Show(textMessage, "From the Heart")

    End Sub 

    Private Sub button4_Click(sender As Object, e As EventArgs) Handles Button4.Click
   
    Dim emailMessage As String = ""

    emailMessage = " Dear " & firstName & " From the heart," & vbCrLf

    emailMessage &= "Wishing you a very happy " & age & "th birthday! You are a wonderful person who is greatly loved and appreciated. Wishing you peace, joy and all the best in life. " 

emailMessage &= " May the color of your favorite color, " & favoriteColor & " bring you extra joy and happiness. "

emailMessage &= " Sending love and hugs, 

Your Name"

    MessageBox.Show(emailMessage, "From the Heart")

    End Sub

    Private Sub button5_Click(sender As Object, e As EventArgs) Handles Button5.Click
        Me.Close()
    End Sub 
End Class