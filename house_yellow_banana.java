// From the Heart - A 2000 Line Java Program 

import java.util.*;
import java.io.*;

public class FromTheHeart {

	// Main Method
	public static void main(String[] args) {
		
		// Variables
		int numLines = 2000;
		String outputFile = "FromTheHeart.java";
		
		// Create a new random
		Random random = new Random();
		
		// Print an introduction
		System.out.println("This program will write " + numLines + " lines of code to " + outputFile);
		
		try {
			// Open the output file
			FileWriter output = new FileWriter(outputFile);
			
			// Write 2000 lines of code
			for (int i = 0; i < numLines; i++) {
				// Write a random line
				int randomNumber = random.nextInt(100);
				String randomLine = "// Line " + (i + 1) + ": " + randomNumber + "\n";
				
				output.write(randomLine);
			}
			
			// Close the output file
			output.close();
			
			// Success message
			System.out.println("Done writing to " + outputFile);
			
		} catch (IOException e) {
			// Error message
			System.out.println("Error writing to file " + outputFile);
		}
		
	}

}