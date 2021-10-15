import os
from flask import Flask, flash, request, redirect, url_for, send_file
from werkzeug.utils import secure_filename
import os

UPLOAD_FOLDER = './input'
ALLOWED_EXTENSIONS = {'csv', 'txt','pdf'}

app = Flask(__name__,static_folder='input')
app.secret_key = os.urandom(12)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
  return '.' in filename and \
         filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



@app.route('/download')
def download(entryFile):
    #For windows you need to use drive name [ex: F:/Example.pdf]
    path = f"C:/Users/saidworks/Desktop/JSlearn/frameworks/Angular/cvcoverletter/input/{entryFile}"
    return send_file(path, as_attachment=True)


@app.route('/', methods=['GET', 'POST'])
def process():
  if request.method == 'POST':
    # check if the post request has the file part
    if 'file' not in request.files:
      flash('No file part')
      return redirect(request.url)
    file = request.files['file']
    # if user does not select file, browser also
    # submit an empty part without filename
    if file.filename == '':
      flash('No selected file')
      return redirect(request.url)
    if file and allowed_file(file.filename):
      filename = secure_filename(file.filename)
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
      return redirect(url_for('static',filename=filename))

  return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''


if __name__ == "__main__":
  app.run()
