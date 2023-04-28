from fastai.vision.all import *
from PIL import Image
from os import path

learn_inf = load_learner('models/model1.pkl')

# change below line to img destination #
basepath = './election-data/'
imgpath = 'input.png'

# img = PILImage.create(path.join(basepath, imgpath))

# print(img)


def predict(img):
    pred, pred_idx, probs = learn_inf.predict(img)
    return pred, float(probs[pred_idx])


img = PILImage.create(path.join(basepath, imgpath))
print(predict(img))

# img = PILImage.create()

# pred, pred_idx, probs = learn_inf.predict(img)
# print(f'Prediction: {pred}; Probability: {probs[pred_idx]:.04f}')
