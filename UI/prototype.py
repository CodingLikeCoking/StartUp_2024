import tkinter as tk
from tkinter import PhotoImage

# Create the main window
root = tk.Tk()
root.title("Social Media App")
root.geometry("400x700")  # Set the window size

# Create a frame for the bottom navigation bar
nav_frame = tk.Frame(root, bg="white", height=60)
nav_frame.pack(side="bottom", fill="x")

# Load icons (you should replace these with your actual icon paths)
map_icon = PhotoImage(
    file="./assets/icons/map.webp"
)  # Replace with the actual file path
explorer_icon = PhotoImage(
    file="./assets/icons/explorer.webp"
)  # Replace with the actual file path
home_icon = PhotoImage(
    file="./assets/icons/homepage.webp"
)  # Replace with the actual file path
calendar_icon = PhotoImage(
    file="./assets/icons/calendar.webp"
)  # Replace with the actual file path
skill_tree_icon = PhotoImage(file="skilltree.svg")  # Replace with the actual file path

# Create buttons for each function
map_button = tk.Button(
    nav_frame, image=map_icon, bd=0, command=lambda: print("Map Navigation")
)
map_button.pack(side="left", expand=True, fill="both")

explorer_button = tk.Button(
    nav_frame, image=explorer_icon, bd=0, command=lambda: print("Explorer")
)
explorer_button.pack(side="left", expand=True, fill="both")

home_button = tk.Button(
    nav_frame, image=home_icon, bd=0, command=lambda: print("Home Page (Feed)")
)
home_button.pack(side="left", expand=True, fill="both")

calendar_button = tk.Button(
    nav_frame, image=calendar_icon, bd=0, command=lambda: print("Calendar")
)
calendar_button.pack(side="left", expand=True, fill="both")

skill_tree_button = tk.Button(
    nav_frame, image=skill_tree_icon, bd=0, command=lambda: print("Skill Tree")
)
skill_tree_button.pack(side="left", expand=True, fill="both")

# Main loop to run the application
root.mainloop()
