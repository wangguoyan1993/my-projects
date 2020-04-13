import React from 'react';

export class MysqlInstallLearn extends React.Component {
    render() {
        return (
            <div>
                前段时间自己租了个云服务，想搭个网站玩儿玩儿，按常规nginx + react + nodejs + mysql的架构。由于一直是做前端开发，没有太多操作linux的经验，在mysql的安装的时候，遇到了问题。把一路查资料和实践的经验总结一下

                参考网上的许多教程，输入如下指令安装mysql

                yum install mysql-community-server
                结果报如下错误（相信大部分同学第一次安装都会遇到同样的错误）：
                [root@host ~]# yum install mysql-community-server
                Loaded plugins: fastestmirror
                Setting up Install Process
                Loading mirror speeds from cached hostfile
                * base: mirror.san.fastserv.com
                * elrepo-kernel: repos.lax-noc.com
                * extras: mirrors.oit.uci.edu
                * updates: mirror.keystealth.org
                Resolving Dependencies
                --> Running transaction check
                ---> Package mysql-community-server.x86_64 0:5.7.20-1.el7 will be installed
                --> Processing Dependency: mysql-community-common(x86-64) = 5.7.20-1.el7 for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: mysql-community-client(x86-64) >= 5.7.9 for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: systemd for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: systemd for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libstdc++.so.6(GLIBCXX_3.4.15)(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libnuma.so.1(libnuma_1.2)(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libnuma.so.1(libnuma_1.1)(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libc.so.6(GLIBC_2.17)(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libsasl2.so.3()(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libnuma.so.1()(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Running transaction check
                ---> Package mysql-community-client.x86_64 0:5.7.20-1.el7 will be installed
                --> Processing Dependency: mysql-community-libs(x86-64) >= 5.7.9 for package: mysql-community-client-5.7.20-1.el7.x86_64
                --> Processing Dependency: libstdc++.so.6(GLIBCXX_3.4.15)(64bit) for package: mysql-community-client-5.7.20-1.el7.x86_64
                --> Processing Dependency: libc.so.6(GLIBC_2.14)(64bit) for package: mysql-community-client-5.7.20-1.el7.x86_64
                ---> Package mysql-community-common.x86_64 0:5.7.20-1.el7 will be installed
                ---> Package mysql-community-server.x86_64 0:5.7.20-1.el7 will be installed
                --> Processing Dependency: systemd for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: systemd for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libstdc++.so.6(GLIBCXX_3.4.15)(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libc.so.6(GLIBC_2.17)(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libsasl2.so.3()(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                ---> Package numactl.x86_64 0:2.0.9-2.el6 will be installed
                --> Running transaction check
                ---> Package mysql-community-client.x86_64 0:5.7.20-1.el7 will be installed
                --> Processing Dependency: libstdc++.so.6(GLIBCXX_3.4.15)(64bit) for package: mysql-community-client-5.7.20-1.el7.x86_64
                --> Processing Dependency: libc.so.6(GLIBC_2.14)(64bit) for package: mysql-community-client-5.7.20-1.el7.x86_64
                ---> Package mysql-community-libs.x86_64 0:5.7.20-1.el7 will be installed
                --> Processing Dependency: libc.so.6(GLIBC_2.14)(64bit) for package: mysql-community-libs-5.7.20-1.el7.x86_64
                ---> Package mysql-community-server.x86_64 0:5.7.20-1.el7 will be installed
                --> Processing Dependency: systemd for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: systemd for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libstdc++.so.6(GLIBCXX_3.4.15)(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libc.so.6(GLIBC_2.17)(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Processing Dependency: libsasl2.so.3()(64bit) for package: mysql-community-server-5.7.20-1.el7.x86_64
                --> Finished Dependency Resolution
                Error: Package: mysql-community-server-5.7.20-1.el7.x86_64 (mysql57-community)
                Requires: libsasl2.so.3()(64bit)
                Error: Package: mysql-community-client-5.7.20-1.el7.x86_64 (mysql57-community)
                Requires: libstdc++.so.6(GLIBCXX_3.4.15)(64bit)
                Error: Package: mysql-community-libs-5.7.20-1.el7.x86_64 (mysql57-community)
                Requires: libc.so.6(GLIBC_2.14)(64bit)
                Error: Package: mysql-community-server-5.7.20-1.el7.x86_64 (mysql57-community)
                Requires: systemd
                Error: Package: mysql-community-server-5.7.20-1.el7.x86_64 (mysql57-community)
                Requires: libstdc++.so.6(GLIBCXX_3.4.15)(64bit)
                Error: Package: mysql-community-client-5.7.20-1.el7.x86_64 (mysql57-community)
                Requires: libc.so.6(GLIBC_2.14)(64bit)
                Error: Package: mysql-community-server-5.7.20-1.el7.x86_64 (mysql57-community)
                Requires: libc.so.6(GLIBC_2.17)(64bit)
                You could try using --skip-broken to work around the problem
                You could try running: rpm -Va --nofiles --nodigest
                度娘查了各种资料和文章，大概确定是mysql的依赖问题。但是中间过程跟着各种教程搞的很乱，又由于对linux的基本目录不够了解，因此搞了很多文件和目录，也不知到该删除哪些。因此打算卸载重装（简单粗暴但有效）这里贴出来卸载mysql重装的方法：
                第一步：
                删除mysql的思路无非是先使用 yum remove 命令，将之前的安装包移除。但是会有许多残留文件在里面，因此要用命令查找残留的文件，全部删除。
                * 快速删除
                yum remove mysql mysql-server mysql-libs
                * 查找残留的文件
                rpm -qa | grep -i mysql
                * 查找残留的目录并删除
                whereis mysql

                rm -rf 要删除的目录
                注意：使用 rm -rf 命令之前，一定要先学习一下命令的使用方式，后面一定要跟上要删除的目标，否则是删除整个当前目录下的所有内容
                正式安装：

                由于之前已经发现了安装失败的原因，是依赖包没有成功安装导致的，是由于访问国外网站速度慢的问题。因此，这次安装的思路是通过 wget 先将安装包下载到本地，再解压安装包进行安装
                mysql的安装分为两部分，一部分是community的交互管理，另一部分是mysql-server服务
                先给centOS添加rpm源，并且选择比较新的源（5.7以后的mysql开始收费，所以选择5.7版本安装）
                先切到想要下载安装包的目录，个人习惯放在usr下新建目录或者opt目录下新建目录（个人爱好位置，随意）输入如下命令:
                wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
                此时输入 ls 命令可以看到当前目录下已经下载了rpm的安装包，输入以下命令进行安装：
                yum -y install mysql57-community-release-el7-10.noarch.rpm
                接着就可以安装mysql服务器了，但是直接安装会出现下载过慢的情况：

                因此可以通过国内镜像代理进行下载，类似npm的国内淘宝代理，代理地址：http://mirrors.ustc.edu.cn/mysql-ftp/Downloads/MySQL-5.7/
                设置好代理地址之后，可以顺利安装了
                yum -y install mysql-community-server
                安装完成，启动mysql
                systemctl start  mysqld.service
                查看mysql的运行状态（当一个服务运行起来之后，systemctl可以监控到它，可以通过systemctl命令进行服务的操作，个人比较习惯使用这个命令进行管理）：
                systemctl status mysqld.service
                看到绿色的标志表示运行中

                此时MySQL已经开始正常运行，不过要想进入MySQL还得先找出此时root用户的密码，通过如下命令可以在日志文件中找出密码：
                grep "password" /var/log/mysqld.log

                进入数据库命令：
                mysql -uroot -p
                输入初始密码，但如果要操作数据库，必须要先修改密码。根据mysql的要求，密码要比较强的复杂度，与validate_password_policy的值有关：

                可以通过命令查看密码复杂度要求的规则：
                mysql> SHOW VARIABLES LIKE 'validate_password%';
                +--------------------------------------+-------+
                | Variable_name                        | Value |
                +--------------------------------------+-------+
                | validate_password_check_user_name    | OFF   |
                | validate_password_dictionary_file    |       |
                | validate_password_length             | 4     |
                | validate_password_mixed_case_count   | 1     |
                | validate_password_number_count       | 1     |
                | validate_password_policy             | LOW   |
                | validate_password_special_char_count | 1     |
                +--------------------------------------+-------+
                7 rows in set (0.01 sec)
                密码的长度是由validate_password_length决定的，而validate_password_length的计算公式是：
                validate_password_length = validate_password_number_count + validate_password_special_char_count + (2 * validate_password_mixed_case_count)
                可以通过如下命令对密码复杂度进行修改：
                mysql> set global validate_password_policy=0;
                mysql> set global validate_password_length=1;
                此时便可以使用简单的密码进行设置了：
                mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'new password';
                但此时还有一个问题，就是因为安装了Yum Repository，以后每次yum操作都会自动更新，需要把这个卸载掉：
                yum -y remove mysql57-community-release-el7-10.noarch
                这时候就可以快乐的增删改查了！
                参考文章：https://segmentfault.com/a/1190000003049498

            </div>
        )
    }
}