from pandasgui import show
import pandas as pd
from pandasql import sqldf
import json

# Load JSON data into a DataFrame
with open("charCulture.json", "r", encoding="utf-8") as file:
    data = json.load(file)
df = pd.json_normalize(data)

# Register DataFrame as a table for SQL queries
pysqldf = lambda q: sqldf(q, globals())

# Launch the GUI to visualize and interact with the DataFrame
gui = show(df)

# You can now interact with the DataFrame using the GUI interface