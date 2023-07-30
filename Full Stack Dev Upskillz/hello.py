import numpy as np 
import pandas as pd 

import os
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))

        import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

shark_tank = pd.read_csv('/kaggle/input/shark-tank-india-dataset/Shark Tank India Dataset.csv')
shark_tank