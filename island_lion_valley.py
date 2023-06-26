#From the Heart

#A Poem in Python

heart = "A beating heart of love untold, \nSending warmth to leave a hold.\nThe love that lies within our hearts, \nThat can never be apart.\n"

for i in range(0,100):
	print(heart)

def cryForLove(message):
	print("My love, why do you cry? \nThese tears that fall like rain, \nWill never end this pain."+message)

def smileForLove(message):
	print("My love, why do you smile? \nThese happy thoughts that come to you, \nAre proof of our love so true."+message)

def whisperLove(message):
	print("My love, you can whisper in my ear, \nThat your love for me is sincere. \nAnd that it will forever be \nA love so strong and true for me." +message)
 
def embraceLove(message):
	print("My love, when I embrace you, \nI find a comfort and joy in you. \nA love of peace, calm, and serenity, \nThat shall last until eternity."+message)

#The loop below will accept user inputs to the poem

for i in range(1,20):
	user_input = input("Add a message to the poem: \n")

	cryForLove(user_input)
	smileForLove(user_input)
	whisperLove(user_input)
	embraceLove(user_input)


#The ending of the poem
print("So from the heart, I love you so.\nYour love will never grow old.\nMy love for you will be strong,\nTo carry on forever long.")