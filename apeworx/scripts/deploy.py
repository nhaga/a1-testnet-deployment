from ape import project, accounts

def main():
    signer = accounts.load('test')
    signer.deploy(project.Storage)