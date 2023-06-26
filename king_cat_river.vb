Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        'Create a new Form to display the window
        Dim form2 As New Form2
        form2.Show()

        'Create textboxes, labels and buttons to the window
        Dim TextBox1 As New TextBox
        Me.Controls.Add(TextBox1)
        TextBox1.Location = New Point(80, 50)
        TextBox1.Size = New Size(160, 20)
        TextBox1.Text = "This is an example"

        Dim Label1 As New Label
        Me.Controls.Add(Label1)
        Label1.Location = New Point(20, 50)
        Label1.Size = New Size(50, 20)
        Label1.Text = "Textbox1:"

        Dim Button1 As New Button
        Me.Controls.Add(Button1)
        Button1.Location = New Point(150, 100)
        Button1.Size = New Size(90, 20)
        Button1.Text = "Submit"

        Dim TextBox2 As New TextBox
        Me.Controls.Add(TextBox2)
        TextBox2.Location = New Point(80, 140)
        TextBox2.Size = New Size(160, 20)
        TextBox2.Text = ""

        Dim Label2 As New Label
        Me.Controls.Add(Label2)
        Label2.Location = New Point(20, 140)
        Label2.Size = New Size(50, 20)
        Label2.Text = "Textbox2:"

        'Create a new procedure to be called by the button
        Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
            'Show a message when the button is clicked
            MessageBox.Show("You clicked the button!")
            'Set the text of Textbox2 to the value of Textbox1
            TextBox2.Text = TextBox1.Text
        End Sub

    End Sub

End Class