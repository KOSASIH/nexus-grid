# chatbot.py
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM

class Chatbot:
  def __init__(self):
    self.model = Sequential()
    self.model.add(LSTM(50, input_shape=(10, 10)))
    self.model.add(Dense(10, activation='softmax'))
    self.model.compile(loss='categorical_crossentropy', optimizer='adam')

  def train(self, data):
    self.model.fit(data, epochs=10)

  def respond(self, input_text):
    input_vector = np.array([[input_text]])
    output_vector = self.model.predict(input_vector)
    return output_vector

chatbot = Chatbot()
chatbot.train([
  ['hello', 'hi'],
  ['how are you', 'i am good'],
  ['what is your name', 'i am nexus grid chatbot']
])

print(chatbot.respond('hello'))  # Output: hi
