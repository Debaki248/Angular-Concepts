import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiesMockiesComponent } from './spies-mockies.component';
import { MessageService } from '../../services/message.service';
import { FormsModule } from '@angular/forms';

/* class MockedMessageService {
  message:string;
  messagePassed(name:String,password:String){
    return this.message = "eferrefre" ;
  }
} */
describe('SpiesMockiesComponent', () => {
 // let service:MockedMessageService;
  let service: MessageService;
  let component: SpiesMockiesComponent;
  let fixture: ComponentFixture<SpiesMockiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiesMockiesComponent ],
      imports: [FormsModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiesMockiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new MessageService();
    component = new SpiesMockiesComponent(service);
  });
  afterEach(() => {
    service = null;
    component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should check if the name entered in textfeild is the same name ",() => {
    spyOn(service,'messagePassed'); 
     component.sendMessage("cfdddvfdvfd");
     component.updatedName = "cfdddvfdvfd";
    expect(component.updatedName).toBe("shyam");
  });
})
