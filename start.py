from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/admin/login', methods=['POST'])
def admin_login():
    username = request.form.get('username')
    password = request.form.get('password')
    # 这里添加您的用户验证逻辑
    if username == 'damon' and password == 'jrway2012':
        # 登录成功，重定向到管理面板
        return redirect(url_for('admin_panel'))
    else:
        # 登录失败，重定向回登录页面
        return redirect(url_for('admin'))

@app.route('/admin/panel')
def admin_panel():
    # 这里是管理面板的逻辑
    return "欢迎来到管理面板"

if __name__ == '__main__':
    app.run(debug=True)