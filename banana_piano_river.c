#include <stdio.h>
#include <string.h>

int main()
{
    // declare variables
    const char* heartWords[] = {
        "Let me love you from the heart,",
        "Let me hold you in my arms,",
        "Let me show you how I feel,",
        "Let me give you all my love,",
        "Let me show you I care,",
        "Let me whisper sweet words,",
        "Let me feel the joy of being with you,",
        "Let me be part of your life,",
        "Let me love you forever and ever,",
        "Let me make you feel special,",
        "Let me make you feel wanted,",
        "Let me make you happy,",
        "Let me fill your life with love,",
        "Let me be your guiding light,",
        "Let me take away your pain and sorrow,",
        "Let me walk with you on a journey of love,",
        "Let me write our story of love together,",
        "Let me take your light and make it mine,",
        "Let me take your sorrow and bring you joy,",
        "Let me behold your beauty with every passing day,",
        "Let me cherish every single moment with you,",
        "Let me keep the flame of love burning forever."
    };
 
    // create variables to hold strings
    char str1[120];
    char str2[120];
 
    // loop through array
    int i;
    for (i = 0; i < 22; i++)
    {
        // if statement to check if line is even
        if (i % 2 == 0)
        {
            // set str1 to current item in array
            strcpy(str1, heartWords[i]);
        }
        else
        {
            // set str2 to current item in array
            strcpy(str2, heartWords[i]);
 
            // printout lines together
            printf("%s %s\n", str1, str2);
        }
    }
 
    return 0;
}