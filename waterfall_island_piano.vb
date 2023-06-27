Public Class FromTheHeart 

'Declare variables
Dim strLove As String
Dim strDesire As String
Dim strHope As String
Dim lngFeeling As Long

'Initialize variables
strLove = "Love is the most powerful emotion."
strDesire = "Do not let anything stand in the way of your dreams."
strHope = "With hope, anything can be accomplished."
lngFeeling = 0

Sub Main()

'Introduce program
Console.WriteLine("Welcome to 'From The Heart'!" & vbCrLf)

'Greet the user
Console.WriteLine("We will be providing you with beautiful words of wisdom." & vbCrLf)

'Provide words of wisdom
While lngFeeling <= 2
	Select Case lngFeeling
		Case 0:
			Console.WriteLine(strLove & vbCrLf)
		Case 1:
			Console.WriteLine(strDesire & vbCrLf)
		Case 2:
			Console.WriteLine(strHope & vbCrLf)
	End Select
	lngFeeling = lngFeeling + 1
End While

'End program
Console.WriteLine("Thank you for exploring 'From The Heart'!" & vbCrLf)

End Sub

End Class