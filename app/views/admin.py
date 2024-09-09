from flask import Blueprint, render_template, request, redirect, url_for, flash

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/')
def admin():
    return render_template('admin.html')

@admin_bp.route('/login', methods=['POST'])
def admin_login():
    username = request.form.get('username')
    password = request.form.get('password')
    # 这里添加您的用户验证逻辑
    if username == 'damon' and password == 'jrway2012':
        # 登录成功，重定向到仪表盘
        return redirect(url_for('dashboard.dashboard'))
    else:
        # 登录失败，重定向回登录页面
        flash('用户名或密码错误')
        return redirect(url_for('admin.admin'))

# 我们可以保留这个路由，但现在不会直接使用它
@admin_bp.route('/panel')
def panel():
    # 这里是管理面板的逻辑
    return "欢迎来到管理面板"
